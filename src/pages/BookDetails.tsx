import React from 'react'

const BookDetails = () => {
    return (
        <div className="bg-gray-100  py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800  mb-2">
                            Design Theory:
                            The Psychology of
                            Graphic Design Pricing
                        </h2>
                        <p className="text-gray-600  text-base mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <div>
                            <p className="text-gray-600  text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                ante justo. Integer euismod libero id mauris malesuada tincidunt.
                                Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
                                vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
                                nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
                                lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
                                nisl suscipit, nec tincidunt mi consectetur.
                            </p>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300  mb-4">
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Product Image"
                            />
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookDetails