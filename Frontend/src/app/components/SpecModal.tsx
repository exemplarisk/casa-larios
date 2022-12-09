import React, { useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { aboutData, aboutTitles } from '../utils/data'

function SpecModal() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div role="article" className="bg-gray-100 py-12 md:px-8">
          <div className="px-4 py-10 xl:px-0">
            <div className="flex flex-col flex-wrap lg:flex-row">
              <div className="mt-4 lg:mt-0 lg:w-3/5">
                <div>
                  <h1 className="ml-2 text-3xl font-bold tracking-normal text-gray-900 lg:ml-0 lg:w-11/12 lg:text-4xl">
                    The Apartment
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 xl:px-0">
            <div className="grid gap-8 pb-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {aboutTitles.map((p) => {
                return (
                  <div key={p.id} role="cell" className="bg-gray-100">
                    <div className="h-full w-full rounded-xl bg-white p-5">
                      <span>
                        <img
                          className="mb-5 rounded-full bg-gray-200 p-2"
                          src="https://i.ibb.co/27R6nk5/home-1.png"
                          alt="home-1"
                        />
                      </span>
                      <h1 className="pb-4 text-2xl font-semibold">{p.title}</h1>
                      {aboutData.map((c) => {
                        return c.parent === p.title ? (
                          <div key={c.description} className="my-5">
                            <div className="flex w-full items-center space-x-3 pb-4 dark:border-gray-700">
                              <BiCheck />
                              {c.href ? (
                                <h4>
                                  <a
                                    style={{ color: 'blue' }}
                                    href={c.href}
                                    rel="noreferrer noopener"
                                    target="_blank"
                                  >
                                    {c.description}
                                  </a>
                                </h4>
                              ) : (
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                  {c.description}
                                </dd>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecModal
