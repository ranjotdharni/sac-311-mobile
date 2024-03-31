import axios from 'axios';
import * as Parser from 'react-native-rss-parser';

export const fetchRSSFeed = async (feedUrl: string) => {
    try {
        const response = await axios.get(feedUrl);
        const parsedData = await Parser.parse(response.data);

        //since the <p> html tag was showing up in the description
        const removeHTMLTags = (str: any) => {
            return str.replace(/<\/?[^>]+(>|$)/g, "");
        };

        return parsedData.items.map((item) => ({
            id: item.id,
            title: item.title,
            imgUrl: item.enclosures[0]?.url || 'DEFAULT_IMAGE_URL',
            link: item.links[0]?.url,
            desc: removeHTMLTags(item.description || ''),
        }));
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return [];
    }
};
