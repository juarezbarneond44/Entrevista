var products = [{
    id: 1,
    name: "Kit Kat",
    description: "Fabricadas por The Hershey Company, las barras Kit Kat son una delicia para los amantes del chocolate. El crujido satisfactorio cuando los separas",
    color: "red",
    cantidad: 30.20,
    url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/kit-kat-bar-wrapped.jpg?resize=640,468&quality=82&strip=all",
},
{
    id: 2,
    name: "Cheetos",
    description: "Flamin' Hot Cheetos ha enganchado a los fanáticos de los palitos con queso, pero una vez que escuches cómo se inventó la receta, es probable que te encante mucho más el refrigerio picante.",
    color: "orange",
    cantidad: 70.50,
    url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/Small-bag-of-cheetos.jpg?resize=640,468&quality=82&strip=all",
},
{
    id: 3,
    name: "	Kellogg's",
    description: "Si te encanta comer cereales como refrigerio, estarás encantado de ver a Kellogg's en esta lista. Desde Special K hasta Frosted Flakes, Kellogg's ofrece muchas opciones icónicas. ",
    color: "red",
    cantidad: 105.70,
    url: "https://www.eatthis.com/wp-content/uploads/sites/4/2015/11/kelloggs-special-k-red-berries.jpg?resize=640,468&quality=82&strip=all",
},
{
    id: 4,
    name: "Campbell's",
    description: "¿La sopa enlatada es un bocadillo? Bueno, dependiendo de tu nivel de hambre, ¡podría ser!",
    color: "blue",
    cantidad: 450.10,
    url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/campbells-tomato-soup.jpg?resize=640,468&quality=82&strip=all",
},
{
    id: 5,
    name: "Quaker Ouats",
    description: "Quaker es un elemento básico del hogar, y por una buena razón. Desde el desayuno hasta la merienda, Quaker está a su disposición",
    color: "azul",
    cantidad: 16.40,
    url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/quaker-oats.jpg?resize=640,468&quality=82&strip=all",
},
{
    id: 6,
    name: "snickers",
    description: "Las barras de chocolate Snickers son bien conocidas por la brillante campaña de marketing que presenta a personas hambrientas que cambian de forma debido a la falta de nutrición.",
    color: "brown",
    cantidad: 53.30,
    url: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/08/snickers-bar.jpg?resize=640,468&quality=82&strip=all",
},
{
    id: 7,
    name: "cheerios",
    description: "El cereal también puede ser un bocadillo, ¿verdad? Los Cheerios son un regalo adecuado para los niños pequeños porque son fáciles de agarrar para los dedos pequeños y lo suficientemente pequeños como para tragarlos sin masticarlos mucho.",
    color: "yellow",
    cantidad: 75.05,
    url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/cheerios.jpg?resize=640,468&quality=82&strip=all",
},
{
    id: 8,
    name: "pringles",
    description: "Este icónico envase de snack es inconfundible. Probablemente hayas reventado un top o dos con tus amigos.",
    color: "red",
    cantidad: 45.6,
    url: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/pringles-original.jpg?resize=640,468&quality=82&strip=all",
},
{
    id: 9,
    name: "Lays",
    description: "Las papas fritas clásicas de Lay son crujientes y tienen suficiente sabor salado, pero no demasiado, para que vuelvas por más. ¿Quizás tenga buenos recuerdos de haber comido este refrigerio salado básico en los juegos de baloncesto o fútbol de la escuela?",
    color: "yellow",
    cantidad: 95.4,
    url: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/lays-classic.jpg?resize=640,468&quality=82&strip=all",
},
{
    id: 10,
    name: "Betty Crocker",
    description: "Betty Crocker es una marca icónica por una razón: la marca produce muchos bocadillos icónicos y mezclas para hornear.",
    color: "gray",
    cantidad: 47.2,
    url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/10/betty-crocker-cake-mix-vanilla.jpg?resize=640,468&quality=82&strip=all",
},
]
var orders = [
    {
        id: "NFJAS5821",
        date: "04/06/2021 14:12 ",
        total: 33.22,
        idProduct: 1,
        purchase: 1,
    },
    {
        id: "GJKSH42324",
        date: "24/03/2021 21:10 ",
        total: 77.55,
        idProduct: 2,
        purchase: 2,
    },
    {
        id: "GLKSJ29734",
        date: "10/07/2021 15:30",
        total: 116.27,
        idProduct: 3,
        purchase: 3,
    },
    {
        id: "VNSO2834",
        date: "09/02/2021 09:20",
        total: 495.11,
        idProduct: 4,
        purchase: 4,
    },
    {
        id: "POKWEKR2312",
        date: "17/03/2020 19:12",
        total: 18.04,
        idProduct: 5,
        purchase: 5,
    },
    {
        id: "ASDUA32432",
        date: "12/08/2020  07:29",
        total: 58.63,
        idProduct: 6,
        purchase: 6,
    },
    {
        id: "DFDSFE123",
        date: "15/04/2020 23:20",
        total: 82.56,
        idProduct: 7,
        purchase: 7,
    },
    {
        id: "ASDUA32432",
        date: "14/01/2020  7:00",
        total: 50.16,
        idProduct: 8,
        purchase: 8,
    },
    {
        id: "GFHG334324",
        date: "19/10/2020 02:20",
        total: 104.94,
        idProduct: 9,
        purchase: 9,
    },
    {
        id: "SADAS12312",
        date: "29/12/2020 10:45",
        total: 51.92,
        idProduct: 10,
        purchase: 10,
    },
]
var purchase = [
    {
        id: 1,
        purchaseType: "Visa que termina en 4172",
        dir: "zona 1 colonia reformita, Guatemala",
        total: 30.20,
        tax: 0.1,
        idProduct: 1,
        date:"07/06/2021",
        dateBuy:"04/06/2021"

    },
    {
        id: 2,
        purchaseType: "Visa que termina en 3121",
        dir: "zona 2 colonia buena vista, Guatemala",
        total: 70.50,
        tax: 0.1,
        idProduct: 2,
        date:"28/03/2021",
        dateBuy:"24/03/2021"
    },
    {
        id: 3,
        purchaseType: "Visa que termina en 5412",
        dir: "zona 3 colonia frutal, Guatemala",
        total: 105.70,
        tax: 0.1,
        idProduct: 3,
        date:"14/07/2021",
        dateBuy:"10/07/2021"
    },
    {
        id: 4,
        purchaseType: "Visa que termina en 6241",
        dir: "zona 4 colonia reformador, Guatemala",
        total: 450.10,
        tax: 0.1,
        idProduct: 4,
        date:"12/02/2021",
        dateBuy:"09/02/2021"
    },
    {
        id: 5,
        purchaseType: "Visa que termina en 1235",
        dir: "zona 5 colonia bosque, Guatemala",
        total: 16.40,
        tax: 0.1,
        idProduct: 5,
        date:"20/03/2020",
        dateBuy:"17/03/2020"
    },
    {
        id: 6,
        purchaseType: "Visa que termina en 2345",
        dir: "zona 6 colonia villa nueva, Guatemala",
        total: 53.30,
        tax: 0.1,
        idProduct: 6,
        date:"15/08/2020",
        dateBuy:"12/08/2020"
    },
    {
        id: 7,
        purchaseType: "Visa que termina en 5312",
        dir: "zona 7 colonia villa hermosa, Guatemala",
        total: 75.05,
        tax: 0.1,
        idProduct: 7,
        date:"15/04/2020",
        dateBuy:"18/04/2020"
    },
    {
        id: 8,
        purchaseType: "Visa que termina en 6123",
        dir: "zona 8 colonia el roble, Guatemala",
        total: 45.6,
        tax: 0.1,
        idProduct: 8,
        date:"14/01/2020",
        dateBuy:"18/01/2020"
    },
    {
        id: 9,
        purchaseType: "Visa que termina en 7421",
        dir: "zona 9 colonia cayala, Guatemala",
        total: 95.4,
        tax: 0.1,
        idProduct: 9,
        date:"19/10/2020",
        dateBuy:"25/10/2020"
    },
    {
        id: 10,
        purchaseType: "Visa que termina en 5123",
        dir: "zona 10 colonia el pozo, Guatemala",
        total: 47.2,
        tax: 0.1,
        idProduct: 10,
        date:"02/1/2021",
        dateBuy:"29/12/2020"
    }


]


async function index(req, res) {
    const resultado = `server controller`
    res.send(resultado);
    res.status(200);
    return
}

async function getOrders(req, res) {
    try {
        let aux = [];
        orders.forEach(element => {
            aux.push({ order: element, product: products.find(data => data.id == element.idProduct) })
        });
        res.status(200)
        res.send(aux)

        return
    } catch (e) {
        console.error(e);
        res.status(500);
        res.send("Error al ejecutar la consulta");
    }

}

async function getOrdersName(req, res) {
    try {
        var { name } = req.body;
        let aux = [];
        orders.forEach(element => {
            const product = products.find(data => data.id == element.idProduct);
            if (product.name == name) {
                aux.push({ order: element, product: products.find(data => data.id == element.idProduct) })
            }
        });
        res.status(200)
        res.send(aux)

        return
    } catch (e) {
        console.error(e);
        res.status(500);
        res.send("Error al ejecutar la consulta");
    }

}

async function getPurchase(req, res) {
    try {
        var { idPurchase } = req.params;

        const found = purchase.find(element => element.id == idPurchase);
        if (found == undefined) {
            res.status(400).send("no se encontro detalle");
        }
        else {
            const product = products.find(element => element.id == found.idProduct);
            res.status(200).send({ Purchase: found, product: product });
        }




        return
    } catch (e) {
        console.error(e);
        res.status(500);
        res.send("Error al ejecutar la consulta");
    }

}

module.exports.index = index;
module.exports.getOrders = getOrders;
module.exports.getPurchase = getPurchase;
module.exports.getOrdersName = getOrdersName;
