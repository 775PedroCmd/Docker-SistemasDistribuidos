const express = require('express');
const app = express();
const PORT = 5000;


let users = [
    { id: 11, name: 'Kim' },
    { id: 12, name: 'Leo' },
    { id: 13, name: 'Mia' },
    { id: 14, name: 'Noah' },
    { id: 15, name: 'Olivia' },
    { id: 16, name: 'Peter' },
    { id: 17, name: 'Quinn' },
    { id: 18, name: 'Ryan' },
    { id: 19, name: 'Sophia' },
    { id: 20, name: 'Thomas' },
    { id: 21, name: 'Umaima' },
    { id: 22, name: 'Victor' },
    { id: 23, name: 'William' },
    { id: 24, name: 'Xavier' },
    { id: 25, name: 'Yara' },
    { id: 26, name: 'Zachary' },
    { id: 27, name: 'Alice' }, 
    { id: 28, name: 'Benjamin' },
    { id: 29, name: 'Charlotte' },
    { id: 30, name: 'David' },
    { id: 31, name: 'Elizabeth' },
    { id: 32, name: 'Felix' },
    { id: 33, name: 'Gabrielle' },
    { id: 34, name: 'Henry' }, 
    { id: 35, name: 'Isabel' },
    { id: 36, name: 'Jacob' },
    { id: 37, name: 'Katherine' },
    { id: 38, name: 'Liam' },
    { id: 39, name: 'Madison' },
    { id: 40, name: 'Matthew' },
    { id: 41, name: 'Nora' },
    { id: 42, name: 'Oliver' },
    { id: 43, name: 'Penelope' },
    { id: 44, name: 'Sophia' },
    { id: 45, name: 'Riley' },
    { id: 46, name: 'Samuel' },
    { id: 47, name: 'Scarlett' },
    { id: 48, name: 'Theodore' },
    { id: 49, name: 'Victoria' },
    { id: 50, name: 'William' }, 
    { id: 51, name: 'Amelia' },
    { id: 52, name: 'Ava' },
    { id: 53, name: 'Benjamin' }, 
    { id: 54, name: 'Camila' },
    { id: 55, name: 'Charles' },
    { id: 56, name: 'Charlotte' },
    { id: 57, name: 'Daniel' },
    { id: 58, name: 'Elijah' },
    { id: 59, name: 'Evelyn' },
    { id: 60, name: 'James' },
    { id: 61, name: 'Jennifer' },
    { id: 62, name: 'John' },
    { id: 63, name: 'Joseph' },
    { id: 64, name: 'Lily' },
    { id: 65, name: 'Luna' },
    { id: 66, name: 'Lucas' },
    { id: 67, name: 'Mia' }, 
    { id: 68, name: 'Mia' }, 
    { id: 69, name: 'Michael' },
    { id: 70, name: 'Mila' },
    { id: 71, name: 'Noah' }, 
    { id: 72, name: 'Owen' },
    { id: 73, name: 'Sofia' }, 
    { id: 74, name: 'Stella' },
    { id: 75, name: 'William' }, 
    { id: 76, name: 'Wyatt' },
    { id: 77, name: 'Isabella' }, 
    { id: 78, name: 'Ethan' }, 
];

app.use(express.json());

app.get('/users', (req, res) => {
    res.json(users);
});


app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
        res.status(404).json({ message: 'Usuário não encontrado' });
    } else {
        res.json(user);
    }
});


app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});


app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updateUser = req.body;
    users = users.map(user => user.id === id ? { ...user, ...updateUser } : user);
    res.json(users.find(user => user.id === id));
});


app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.json({ message: 'Usuário removido com sucesso' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
