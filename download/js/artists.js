//Object list of artists used
//The elements used in the artistTemplate are artistName, image, birthday, death, and age
//image is what is displayed on initally while artistName, image, birthday, death, and age are displayed as an overlay on hover
//When sourcing your own images make sure to use a FULLY QUALIFIED url or if you store your photos locally enter the correct path
//century, nationality, and periods are used for the filters
//url is whats called when one of the artists is clicked, again, make sure to use a fully qualified url

const artistList = [
    {
        "artistID": "1",
        "artistName": "Leonardo da Vinci",
        "image": "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU4MjUzMDA4MDcwMzE4/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg",
        "birthday": "04/15/1452",
        "death": "05/02/1519",
        "age": "67",
        "century": ["15th", "16th"],
        "nationality": "Italian",
        "periods": ["Italian-Renaissance", "High-Renaissance", "Early-Renaissance", "Renaissance", "Florentine"],
        "url": "https://en.wikipedia.org/wiki/Leonardo_da_Vinci"
    },
    {
        "artistID": "2",
        "artistName": "Salvadore Dali",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/440px-Salvador_Dal%C3%AD_1939.jpg",
        "birthday": "06/11/1904",
        "death": "01/23/1989",
        "age": "84",
        "century": ["20th"],
        "nationality": "Spanish",
        "periods": ["Surrealism", "Cubism", "Modern-Art", "Dada"],
        "url": "https://en.wikipedia.org/wiki/Salvador_Dal%C3%AD"
    },
    {
        "artistID": "3",
        "artistName": "Vincent van Gogh",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/440px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        "birthday": "03/30/1853",
        "death": "07/29/1890",
        "age": "37",
        "century": ["19th"],
        "nationality": "Dutch",
        "periods": ["Modern-Art", "Realism", "Japonism", "Post-Impressionism", "Impressionism", "Neo-Impressionism", "Cloisonnism", "Pointillism"],
        "url": "https://en.wikipedia.org/wiki/Vincent_van_Gogh"
    },
    {
        "artistID": "4",
        "artistName": "Michelangelo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg/440px-Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg",
        "birthday": "03/06/1475",
        "death": "02/18/1564",
        "age": "88",
        "century": ["15th", "16th"],
        "nationality": "Italian",
        "periods": ["Italian-Renaissance", "High-Renaissance", "Renaissance", "Mannerism"],
        "url": "https://en.wikipedia.org/wiki/Michelangelo"
    },
    {
        "artistID": "5",
        "artistName": "Pablo Picasso",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Portrait_de_Picasso%2C_1908.jpg/440px-Portrait_de_Picasso%2C_1908.jpg",
        "birthday": "10/25/1881",
        "death": "04/08/1973",
        "age": "91",
        "century": ["19th", "20th"],
        "nationality": "Spanish",
        "periods": ["Cubism", "Synthetic-Cubism", "Analytical-Cubism", "Modern-Art", "Realism", "Post-Impressionism", "Impressionism", "Surrealism",
            "Expressionism", "Naive-Art", "Symbolism", "Art-Nouveau", "Rose-Period", "Blue-Period", "African-Period", "Pointillism", "Modernism"],
        "url": "https://en.wikipedia.org/wiki/Pablo_Picasso"
    },
    {
        "artistID": "6",
        "artistName": "Andy Warhol",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Andy_Warhol_1975.jpg/440px-Andy_Warhol_1975.jpg",
        "birthday": "08/06/1928",
        "death": "02/22/1987",
        "age": "58",
        "century": ["20th"],
        "nationality": "American",
        "periods": ["Modern-Art", "Abstract-Expressionism", "Naive-Art", "Pop-Art", "Contemporary"],
        "url": "https://en.wikipedia.org/wiki/Andy_Warhol"
    },
    {
        "artistID": "7",
        "artistName": "Paul Cézanne",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Paul_cezanne_1861.jpg/440px-Paul_cezanne_1861.jpg",
        "birthday": "01/19/1839",
        "death": "10/22/1906",
        "age": "67",
        "century": ["19th", "20th"],
        "nationality": "French",
        "periods": ["Cubism", "Modern-Art", "Post-Impressionism", "Impressionism", "Romanticism"],
        "url": "https://en.wikipedia.org/wiki/Paul_C%C3%A9zanne"
    },
    {
        "artistID": "8",
        "artistName": "Claude Monet",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/440px-Claude_Monet_1899_Nadar_crop.jpg",
        "birthday": "11/14/1840",
        "death": "12/05/1925",
        "age": "86",
        "century": ["19th", "20th"],
        "nationality": "French",
        "periods": ["Modern-Art", "Realism", "Impressionism"],
        "url": "https://en.wikipedia.org/wiki/Claude_Monet"
    },
    {
        "artistID": "9",
        "artistName": "Frida Kahlo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/440px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
        "birthday": "07/06/1907",
        "death": "07/13/1954",
        "age": "47",
        "century": ["20th"],
        "nationality": "Mexican",
        "periods": ["Surrealism", "Cubism ", "Modern-Art", "Magical-Realism", "Social-Realism", "Naive-Art", "Symbolism", "Naturalism", "Primitivism"],
        "url": "https://en.wikipedia.org/wiki/Frida_Kahlo"
    },
    {
        "artistID": "10",
        "artistName": "Rembrandt",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
        "birthday": "07/15/1606",
        "death": "10/04/1669",
        "age": "63",
        "century": ["17th"],
        "nationality": "Dutch",
        "periods": ["Baroque", "Dutch-Golden-Age"],
        "url": "https://en.wikipedia.org/wiki/Rembrandt"
    },
    {
        "artistID": "11",
        "artistName": "Raphael",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/440px-Raffaello_Sanzio.jpg",
        "birthday": "04/06/1483",
        "death": "04/06/1520",
        "age": "37",
        "century": ["15th", "16th"],
        "nationality": "Italian",
        "periods": ["Italian-Renaissance", "High-Renaissance", "Renaissance", "Mannerism"],
        "url": "https://en.wikipedia.org/wiki/Raphael"
    },
    {
        "artistID": "12",
        "artistName": "Jackson Pollock",
        "image": "https://upload.wikimedia.org/wikipedia/en/4/42/Namuth_-_Pollock.jpg",
        "birthday": "01/28/1912",
        "death": "08/11/1956",
        "age": "44",
        "century": ["20th"],
        "nationality": "American",
        "periods": ["Modern-Art", "Abstract-Expressionism", "Action-Painting"],
        "url": "https://en.wikipedia.org/wiki/Jackson_Pollock"
    },
    {
        "artistID": "13",
        "artistName": "Johannes Vermeer",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg/400px-Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg",
        "birthday": "10/31/1632",
        "death": "12/15/1675",
        "age": "43",
        "century": ["17th"],
        "nationality": "Dutch",
        "periods": ["Baroque", "Dutch-Golden-Age"],
        "url": "https://en.wikipedia.org/wiki/Johannes_Vermeer"
    },
    {
        "artistID": "14",
        "artistName": "Henri Matisse",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Henri_Matisse%2C_1913%2C_photograph_by_Alvin_Langdon_Coburn.jpg/440px-Henri_Matisse%2C_1913%2C_photograph_by_Alvin_Langdon_Coburn.jpg",
        "birthday": "12/31/1869",
        "death": "11/03/1954",
        "age": "84",
        "century": ["19th", "20th"],
        "nationality": "French",
        "periods": ["Modern-Art", "Neo-Impressionism", "Post-Impressionism", "Impressionism", "Modernism", "Fauvism"],
        "url": "https://en.wikipedia.org/wiki/Henri_Matisse"
    },
    {
        "artistID": "15",
        "artistName": "Gustav Klimt",
        "image": "https://uploads4.wikiart.org/images/gustav-klimt.jpg!Portrait.jpg",
        "birthday": "07/14/1862",
        "death": "02/06/1918",
        "age": "55",
        "century": ["19th", "20th"],
        "nationality": "Austrian",
        "periods": ["Symbolism", "Art-Nouveau", "Modern-Art", "Vienna-Secession"],
        "url": "https://en.wikipedia.org/wiki/Gustav_Klimt"
    },
    {
        "artistID": "16",
        "artistName": "William Blake",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/William_Blake_by_Thomas_Phillips.jpg/440px-William_Blake_by_Thomas_Phillips.jpg",
        "birthday": "11/28/1757",
        "death": "08/12/1827",
        "age": "69",
        "century": ["18th", "19th"],
        "nationality": "British",
        "periods": ["Romanticism"],
        "url": "https://en.wikipedia.org/wiki/William_Blake"
    },
    {
        "artistID": "17",
        "artistName": "El Greco",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg/440px-El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg",
        "birthday": "10/01/1541",
        "death": "04/07/1614",
        "age": "72",
        "century": ["16th", "17th"],
        "nationality": "Greek",
        "periods": ["Mannerism", "Renaissance"],
        "url": "https://en.wikipedia.org/wiki/El_Greco"
    },
    {
        "artistID": "18",
        "artistName": "Édouard Manet",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg/1024px-%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg",
        "birthday": "01/23/1832",
        "death": "04/30/1883",
        "age": "51",
        "century": ["19th"],
        "nationality": "French",
        "periods": ["Impressionism", "Realism", "Modern-Art", "Modernism"],
        "url": "https://en.wikipedia.org/wiki/%C3%89douard_Manet"
    }
];