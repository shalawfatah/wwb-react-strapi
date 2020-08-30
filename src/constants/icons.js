import React from "react"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa"
import {  AiFillYoutube } from 'react-icons/ai'

export default [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/shalawfatah",
  },
  {
    id: 2,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.linkedin.com/in/shalawfatah/",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.dribbble.com/shalaw-fatah",
  },
  {
    id: 4,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.behance.net/shalawfatada54",
  },
  {
    id: 5,
    icon: <AiFillYoutube className="social-icon"></AiFillYoutube>,
    url: "https://www.twitter.com/shalawfatah",
  },
]