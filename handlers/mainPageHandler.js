export function mainPageHandler(app, random, countWords) {
    return app.get('/', async function(req, res) {
        res.render('mainPage', { words: random(countWords) });
    });
}


export function wordsCounter(app, random, countWords) {
    let succesCounter = 0;
    app.post('/wordsCounter/', async function(req, res) {

        if (req.body[0]) {
            succesCounter++;
        }
        if (!req.body[0]) {
            succesCounter = 0;
        }
        if (succesCounter >= 5) {
            countWords++;
            succesCounter = 0;
        }

        res.status(200).send(random(countWords));
        console.log(succesCounter, 'check');
        console.log(countWords, 'check');
    });


}