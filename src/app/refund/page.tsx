import NotionEmbed from '@/component/client/NotionEmbed';
import { getData } from '@/lib/notion';

const pageId = '10b98e9e057c8083a1bbd403cdef2ded';

async function Refund() {
  const data = await getData(pageId);
  return <NotionEmbed recordMap={data} rootPageId={pageId} />;
}

export default Refund;