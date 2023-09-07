import { notFound } from 'next/navigation';

import OurValues from '@/components/our-values';
import { INTERNAL_SERVER_ERROR } from '@/constants/response-status';
import { loadOurValues } from '@/lib/our-values';

export default async function OurValuesPage() {
  const fetchOurValues = await loadOurValues();
  const { ourValues, status } = await fetchOurValues.json();

  if (status && status === INTERNAL_SERVER_ERROR) {
    return notFound();
  }

  return <OurValues ourValues={ourValues} />;
}
