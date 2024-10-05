'use client';
import { NotionRenderer } from 'react-notion-x';
import Image from 'next/image'
import Link from 'next/link'

interface RendererProps {
    recordMap: any,
    rootPageId: string
}

export const Renderer = ({ recordMap, rootPageId }: RendererProps) => {
    return (
        <NotionRenderer
            recordMap={recordMap}
            fullPage
            components={{
                nextImage: Image,
                nextLink: Link
            }}
            disableHeader
            darkMode
            rootPageId={rootPageId}
            previewImages
        />
    );
};

export default Renderer;