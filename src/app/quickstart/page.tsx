import NotionEmbed from '@/component/client/NotionEmbed';
import { getData } from '@/lib/notion';

const pageId = '10d98e9e057c808faf77d73031ca78bd';

async function Quickstart() {
    const data = await getData(pageId);
    return <NotionEmbed recordMap={data} rootPageId={pageId} />;
}

export default Quickstart;