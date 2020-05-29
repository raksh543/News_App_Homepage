const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
// const Dashboard = require('./dashboard')

const mongoose=require('mongoose')

const Card = mongoose.model('card');

AdminBro.registerAdapter(AdminBroMongoose)

const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'admin@newsapp.com',
  password: process.env.ADMIN_PASSWORD || 'newsapppass',
}

const AdminBroOptions = {
  resources: [{
    resource: Card,
    options: {
      parent:{
        name: 'User Content',
        icon: 'fa fa-user'
      }
    }
  }],
  dashboard: {
    render:{
      show:(property, resource,helpers)=>{
        const html=
        abcd

        return html
      }
    }
  },
  databases:[mongoose],
  dashboard: {
    handler: async () => {
      // dashboard:{
      //   isVisible:{show:true},
      // render:{
      //   show:{()=>{
      //     const html=
      //     <div>
      //       this is dashboard page
      //     </div>
      //     return html
      //   }
          
      //   }
      // }}
    },
    // component: AdminBro.bundle('../../dashboard.jsx')
  },
  rootpath:'/admin',
  branding:{
    logo:'data:image/png;base64,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',
    companyName: 'Iniesta-NewsApp-Admin'
  }
}


const adminBro = new AdminBro(AdminBroOptions)
// const router = AdminBroExpress.buildRouter(adminBro)

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'coz-i-can-not-decide-a-super-long-password',
  authenticate: async(email, password) =>{
    if(email === ADMIN.email && password === ADMIN.password){
      return ADMIN
    }
    return null
  }
})

module.exports = router