const mongoose = require('mongoose');
const express = require('express');
const connect = require('./connection');
const cors = require('cors');
const User = require('./models/users');





// إعداد تطبيق Express
const app = express();


const PORT = 3002 || process.env.PORT;

app.use(cors());
app.use(express.json());


app.get('/get/users', async(req,res) => {
    const users = await User.find();
    res.json(users)
})

// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});































// const mongoose = require('mongoose')
// const express = require('express');
// const cors = require('cors');
// const connect = require('./connection');
// const { json } = require('body-parser');

// const app = express();

// const PORT = 3002;

// app.use(cors());
// app.use(express.json());

// const conversationsRoute = require('./routes/conversation');
// const messagesRoute = require('./routes/message')
// const userRoute = require('./routes/user')
// const invitationRoute = require('./routes/invitation');
// const relation = require('./routes/relation');

// app.use('/api', conversationsRoute);
// app.use('/api', messagesRoute);
// app.use('/api',userRoute);
// app.use('/api',invitationRoute);
// app.use('/api', relation);


// app.listen(PORT, '0.0.0.0', () => {
//     console.log(`Server is running on port ${PORT}`);
//   });



