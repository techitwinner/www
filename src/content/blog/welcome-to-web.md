---
title: "Welcome to Web!"
description: "A deep dive into the world of web development"
pubDate: 2024-09-27
language: "en-us"
tags: ["web", "introduction", "development", "HTML", "CSS", "JavaScript"]
---

# Welcome to Web!

Welcome to my blog! Whether you're a beginner just starting out or an experienced developer looking to stay updated, this blog is **not for you**.

## The Evolution of the Web

The web we use today is vastly different from the one that started it all. Originally, the web was built for sharing static documents and simple text. But with the advent of new technologies, it's grown into a dynamic, interactive, and essential part of our daily lives. Here’s a quick timeline of web evolution:

- **1990s: The Static Web (Web 1.0)**  
  In the early days of the internet, websites were mostly static HTML pages. Information was published and users simply consumed it. There was no interactivity or user-generated content. This is often referred to as the "read-only" phase of the web.

- **2000s: The Interactive Web (Web 2.0)**  
  With the rise of dynamic content, websites became much more interactive. JavaScript became a key technology, allowing web pages to update in real-time without requiring a full page reload. Social media platforms and user-generated content became prominent, ushering in a new era of web interaction.

- **Today: The Semantic and Decentralized Web (Web 3.0)**  
  Now, the focus is on making the web smarter and more personalized. Artificial Intelligence, decentralized technologies like blockchain, and better accessibility are shaping the future. The web isn't just a tool for finding information anymore; it's a platform for complex applications, immersive experiences, and intelligent services.

## Source Code for this page?

Yes here it is[^1]

```typescript
---
import { type CollectionEntry, getCollection } from 'astro:content';
import Layout from "../../layouts/Layout.astro";

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

type Props = CollectionEntry<'blog'>;

const { slug } = Astro.params;
const posts = await getCollection('blog');
const post = posts.find((p) => p.slug === slug);

if (!post) {
  throw new Error("Post not found");
}

const { Content } = await post.render();
---
<Layout
  {...post.data}
  title={post.data.title}
  description={post.data.description}
  ogTitle={post.data.title}
  ogDescription={post.data.description}
  ogUrl={`https://techit.win/posts/${post.slug}`}
>
  <main>
    <section class="head">
      <div class="container md:text-start">
        <p>BLOG POST</p>
        <h1 class="text-7xl">{post.data.title}</h1>
        <p class="text-lg">{post.data.description}</p>
      </div>
    </section>
    <section class="i9d2">
      <div class="container md:text-start">
        <Content/>
      </div>
    </section>
  </main>
</Layout>

<style>
.head {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: rgba(var(--md-sys-color-primary));
  color: rgba(var(--md-sys-color-on-primary));
}
.i9d2 {
  pre {
    padding: 1rem;
    border-radius: 8px;
    font-size: 14px;
  }
}
</style>
```

[^1]: This is my actual code for this page, but for more code, check [this](https://github.com/techitwinner/web) out.  
By the way, choose ``astro`` branch.
