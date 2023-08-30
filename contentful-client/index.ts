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

  try {
    const data = await client.getEntries<T>({
      content_type: contentType,
      locale: LOCALES[locale?.value as keyof typeof LOCALES] || 'en-US',
    });

    if (data.errors) {
      throw new Error(contentType);
    }

    return {
      ok: true,
      data,
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        ok: false,
        data: {} as EntryCollection<T, undefined, string>,
        error: error.message
      }
    }

    return {
      ok: false,
      data: {} as EntryCollection<T, undefined, string>,
      error: 'Something went wrong while getting data',
    };
  }
}
