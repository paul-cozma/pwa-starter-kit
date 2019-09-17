const url = "http://localhost/wp-json/wp/v2/posts/?_embed&per_page=10";
const axios = require("axios");
const mongoid = require('mongoid-js');

const fs = require("fs");
const loadData = async page => {
    const {
        data
    } = await axios(`${url}&page=${page}`);
    return data;
};

const loopArticles = async () => {
    var posts = true;
    var page = 1;
    var allPosts = [];
    while (posts) {
        const post = await loadData(page);
        allPosts = [...allPosts, ...post];
        if (post.length < 10) {
            posts = false;
            break;
        }
        page++;
    }
    return allPosts;
};
const setPostLayout = async () => {
    const posts = await loopArticles();
    return posts.map(item => {
        var selectedAutor;
        let andra = "5cdf0bd0c38d9d17286ac297";
        let catalina = "5d7fec1f938c973523c52cb2";
        let doruta = "5d7fec82938c973523c52cb6";
        let medrea = "5d7fed22bf2ead3596b6ae77";
        switch (item.autor) {
            case 4:
                selectedAutor = doruta;
                break;
            case 2:
                selectedAutor = andra;
                break;
            case 5:
                selectedAutor = catalina;
            case 3:
                selectedAutor = medrea;
                break;
            default:
                selectedAutor = andra;
                break;
        }
        const user = {
            _id: selectedAutor
        };
        const image = {
            _id: mongoid(),
            url: item.jetpack_featured_media_url.replace(
                "http://localhost/wp-content",
                ""
            ),

        }
        return {
            Title: item.title.rendered,
            date: item.date,
            body: item.content.rendered,

            published: item.status === "publish",
            permalink: item.slug,
            user,
            image: {
                _id: image._id
            },
            imagine: image.url
        };
    });
};
const runStuff = async () => {
    const posts = await setPostLayout();
    fs.writeFileSync("posts.json", JSON.stringify(posts), a => {});
    const images = posts.map(item => {
        return {
            url: item.imagine,
            _id: `ObjectId(${item.image._id})`
        }
    })
    fs.writeFileSync("images.json", JSON.stringify(images), a => {});
};

runStuff();