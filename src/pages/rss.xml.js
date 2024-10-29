import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('blog');
    return rss({
        title: 'Blog @ Techit’s Space',
        description: 'Techit’s personal blog page.',
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.slug}/`,
            customData: `
                <language>${post.data.language || 'en-us'}</language>
            `,
        })),
    });
}