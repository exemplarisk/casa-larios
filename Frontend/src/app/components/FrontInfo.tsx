import React from 'react'
import { features } from '../utils/data'
import Image from 'next/image'

function FrontInfo() {
  return (
      <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                  <h1 className="text-gray-900 tracking-wide mt-2 text-3xl leading-8 font-semibold sm:text-4xl uppercase">Casa Los Larios</h1>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
                      Torrevieja, Spain
                  </p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                      Welcome
                  </p>
              </div>
{/*               <div style={{padding: "2rem", marginTop: "1rem", borderRadius: "25px"}}>
                  <Image style={{borderRadius: "25px"}} src="/images/garden/aparoutd.jpg" alt="" width="1236" height="1048"/>
              </div> */}
              <div className=" mt-16">
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                      {features.map((feature) => (
                          <div key={feature.name}>
                              <dt>
                                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                                  </div>
                                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                              </dt>
                              <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                          </div>
                      ))}
                  </dl>
              </div>
          </div>
      </div>
  )
}

export default FrontInfo