import { cookies } from "next/headers";
import { createClient, EntryCollection, EntrySkeletonType } from 'contentful';

import { LOCALES } from '@/constants/languages';
import { GetEntryResponse } from "@/interfaces/contentful-api";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getEntry<T extends EntrySkeletonType>(
  contentType: string
): Promise<GetEntryResponse<T>> {
  const locale = cookies().get('NEXT_LOCALE');

  const data = await client.getEntries<T>({
    content_type: contentType,
    locale: LOCALES[locale?.value as keyof typeof LOCALES] || 'en-US',
  });

  if (data.errors && data.errors.length > 0) {
    return {
      ok: false,
      data: {} as EntryCollection<T, undefined, string>,
      error: new Error(contentType).message
    }
  }

  return {
    ok: true,
    data,
  };
}
