import * as cheerio from 'cheerio';

export function extractParagraphContent(html: string): string[] {
    const paragraphContents: string[] = [];

    // Load the HTML into a Cheerio object
    const $ = cheerio.load(html);

    // Find all <p> elements and extract their text content
    $('p').each((index, element) => {
        const paragraphText = $(element).text().trim();
        paragraphContents.push(paragraphText);
    });

    return paragraphContents;
}
