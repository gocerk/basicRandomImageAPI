const coolImages = require('cool-images');

class ImageController {
    static generateMetadata = (name, image, description) => {
        return {
            name: name,
            description: description,
            image: image
        }
    }

    static generateRandomImage = (req, res) => {
        const { id, width, height } = req.query;
        const image = coolImages.one(parseInt(height), parseInt(width));
        // console.log(image);
        const metaData = this.generateMetadata(id, image, "This is a random image by cool-images");
        console.log(metaData);
        // res.sendStatus(200);
        res.json({'status': 'success', 'data': metaData});
    }
}

module.exports = ImageController;
