import NextAuth from "next-auth";


import {options} from '../../../utils/auth'

const handeler= NextAuth(options)

export {handeler as GET , handeler as POST}