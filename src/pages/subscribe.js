import React, {Component} from "react"
import Layout from "../components/layout"
import beePic from '../images/anotherbee.png'
import addToMailchimp from 'gatsby-plugin-mailchimp'


class Subscribe extends Component {
  state = {
    name: null,
    email: null,
}

_handleChange = e => {
    console.log({
        [`${e.target.name}`]: e.target.value,
    })
    this.setState({
        [`${e.target.name}`]: e.target.value,
    })
}

_handleSubmit = e => {
    e.preventDefault()

    console.log('submit', this.state)

    addToMailchimp(this.state.email, this.state)
        .then(({ msg, result }) => {
            console.log('msg', `${result}: ${msg}`)

            if (result !== 'success') {
                throw msg
            }
            alert(msg)
        })
        .catch(err => {
            console.log('err', err)
            alert(err)
        })
}
  render () {
    return (
  <Layout>
    <section className="text-gray-700 body-font overflow-hidden py-5" >
            <div className="container px-5 py-0 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={beePic} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium py-10 headline">Subscribe</h1>
                <p className="leading-10 text-xl text-grey-900">We are here to help and provide educational knowledge about bees. Subscribe to learn more about The WorldWide Bee Organization.</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    </div>
                <form className="flex py-10 flex-wrap" onSubmit={this._handleSubmit}>
                <input type="text" className="border-solid border-2 border-gray-300 mx-2 w-full rounded-md px-4 p-2 m-2" placeholder="Enter your name here" name="name" onChange={this._handleChange}/>
                <input type="text" className="border-solid border-2 border-gray-300 mx-2 w-full rounded-md px-4 p-2 m-2" placeholder="Enter your email here" name="email" onChange={this._handleChange}/>
                <li className="list-none font-semibold m-1 flex flex-wrap justify-center">
                <button type="submit" className="flex text-grey-700 bg-white py-2 px-4 focus:outline-none text-lg cursor-pointer button">Submit</button>
                </li>
                </form>
            </div>
            </div>
        </div>
        </section>
  </Layout>
    )
  }
}

export default Subscribe
