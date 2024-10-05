import NotionEmbed from '@/component/client/NotionEmbed';
import { getData } from '@/lib/notion';

const pageId = '52f793e4e2a94bc3aadaed48dbb8d3f6';

async function Privacy() {
    const data = await getData(pageId);
    return <NotionEmbed recordMap={data} rootPageId={pageId} />;
}

export default Privacy;