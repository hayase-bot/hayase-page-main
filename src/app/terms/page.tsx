import NotionEmbed from '@/component/client/NotionEmbed';
import { getData } from '@/lib/notion';

const pageId = 'fcfad1d8197340f7a89145a9e6f2a348';

async function Terms() {
    const data = await getData(pageId);
    return <NotionEmbed recordMap={data} rootPageId={pageId} />;
}

export default Terms;