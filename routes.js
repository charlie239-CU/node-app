const fs = require('fs');
const reqHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html><body><form action='/message' method='post'>");
        res.write("<input name='msg' type='text'>");
        res.write("<input type='submit'>");
        res.write("</form></body></html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, err => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });

        })

    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>hello world from node js</body></html>");
    res.end();
}

module.exports={
    handler:reqHandler,
    someText:"yo hello world"
}