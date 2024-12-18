export default defineEventHandler(async (event) => {
    console.log('server route event path hit: ', event.path)

    return {
        response: 'This is the response from server/routes/s/[...].get.js file when accessing sitemap_index.xml'
    }
})