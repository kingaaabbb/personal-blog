import type {
    SiteConfig,
    ProfileConfig,
    LicenseConfig
} from "./types/config"

import type { FriendLink } from "./types/friend"
import type { Project } from "./types/project"

export const siteConfig: SiteConfig = {
    title: "XiZi",
    subTitle: "Blog",

    favicon: "/favicon/favicon.ico", // Path of the favicon, relative to the /public directory

    pageSize: 6, // Number of posts per page
    toc: {
        enable: true,
        depth: 3 // Max depth of the table of contents, between 1 and 4
    },
    blogNavi: {
        enable: true // Whether to enable blog navigation in the blog footer
    },
    comments: {
        enable: true, // Whether to enable comments
        platform: "default", // Comment platform, set "default" to use Momo-backend, also supports "twikoo"
        backendUrl: "https://api-momo.motues.top" // Backend URL for comments
    },
    theme: {
        AOS: true, // Whether to enable AOS (Animate On Scroll) for animations
        LQIP: true, // Whether to enable LQIP (Low-Quality Image Placeholder) for image placeholders
        PhotoSwipe: true, // Whether to enable PhotoSwipe for image viewer
        postCard: {
            imageMode: "top" // Cover image mode for article cards: "top" shows the image above the content; "background" uses the image as the card background, fading to transparent from right to left
        }
    }
}

export const profileConfig: ProfileConfig = {
    avatar: "assets/Motues.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: "XiZi",
    description: "Life is colorful!",
    indexPage: "https://www.XiZi.top",
    startYear: 2024,
}

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const projectConfig: Project[] = [
    {
    name: 'XiZi JAVA大师超级智能体',
    cover: 'src/assets/404.png',
    url: 'https://github.com/kingaaabbb/xz-ai-agent',
    description: '基于 Spring Boot 3 +⁠ Spring AI + RAG + Tool Calling + M‌CP 的企业级 AI JAVA 大师智能体',
    tags: ['JAVA', 'SpringAI']  // 可选
    },
    {
    name: 'XiZi 电商查库',
    cover: 'src/assets/404.png',
    url: 'https://github.com/kingaaabbb/xz-shopkeeper-agent',
    description: '「电商查库」是一个面向企业数据分析场景的智能体项目。它要解决的问题就是不用手写 SQL，也能像聊天一样从数据仓库里获取想要的分析结果。',
    tags: ['FastApi', 'Langchain']  // 可选
    }
]

export const friendLinkConfig: FriendLink[] = [
    {
        name: 'Motues',
        avatar: 'https://www.motues.top/avatar.jpg',
        url: 'https://www.motues.top',
        description: 'Like River!'
    },
    {
        name: 'Astro',
        avatar: 'https://avatars.githubusercontent.com/u/44914786',
        url: 'https://astro.build',
        description: 'Build fast websites, faster.'
    }
    // Add more friend links here
]