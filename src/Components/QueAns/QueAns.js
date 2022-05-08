import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import React from 'react';

const QueAns = () => {
    return (
        <>
            <div className="w-full px-4 mb-20">
                <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-md font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                                    <span><strong>Question #1:</strong> What is the difference between javascript and nodejs ?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-red-900`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-500">
                                    JavaScript VS Node.js boils down to the matter of a flexible and simple frontend programming language versus the framework that allows it to extend into the backend realm.
                                    <hr className='my-4' />
                                    JavaScript is a scripting language upon which most websites are based. It is often used in combination with HTML and CSS to render web pages, as JavaScript can be used to dynamically update HTML elements. It allows you to automatically refresh the page to update data, display information using cool visuals, and create interactive elements.
                                    <hr className='my-4' />
                                    Node.js is an environment that can run JavaScript code without a browser. It is built on Chrome’s V8 JavaScript engine. The Node.js environment can be run on OS X, Windows, and Linux. It also includes a multitude of JavaScript libraries, which allow developers to leverage open source components and tools to get their applications built faster.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                                    <span><strong>Question #2:</strong> What is the differences between SQL and NOSQL databases?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-red-900`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-500">
                                    <p>SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.</p>
                                    <h4 className="text-2xl font-bold">Features of SQL : </h4>
                                    <ul>
                                        <li>Provide High-Performance Capabilities</li>
                                        <li>Handle Large Transactions with efficiency</li>
                                        <li>SQL is easy to learn and manage</li>
                                        <li>Open Source Programming Language</li>
                                        <li>Supports Data Definition Language and Data Manipulation Language to query the databases</li>
                                        <li>Suitable for every type of organization – large or small.</li>
                                    </ul>
                                    <p>NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Storage in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.</p>
                                    <h4 className="text-2xl font-bold">Features of NoSQL : </h4>
                                    <ul>
                                        <li>NoSQL has higher scalability than other database management systems</li>
                                        <li>NoSQL allows the distribution of data on more than just one device.</li>
                                        <li>With NoSQL Database, you do not require specialized or complex hardware or storage solutions.</li>
                                        <li>Does not require data normalization</li>
                                        <li>Simple API for easy user interfaces</li>
                                        <li>Can store unstructured, semi-structured, or structured data.</li>
                                    </ul>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75">
                                    <span><strong>Question #3:</strong> What is the purpose of JWT and how does it work?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-red-900`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn’t have to completely rely on a datastore(database) to save session information.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </>
    );
};

export default QueAns;