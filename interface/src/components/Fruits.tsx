/* eslint-disable @typescript-eslint/no-explicit-any */
interface Fruit {
    name: string;
    image: string
}

const Fruits = (props: { fruits: Fruit[] }) => {
    console.log('inside', props)
    return (
        <>
            <div className="rounded overflow-hidden shadow-lg grid grid-cols-3 gap-3">
                <>
                    {
                        props.fruits.map((fruit, index) => {
                            return (
                                <div key={index} className=" flex flex-column box-border h-128 w-128 border-4 bg-red-400 text-white rounded-md mx-3.5 my-3.5 text-center">
                                    <p className="flex-1 p-2">{fruit.name}</p>
                                    <div>
                                        <img className='w-full h-48 object-cover place-content-center' src={fruit.image}></img>
                                    </div>
                                </div>
                            )
                        })
                    }

                </>
            </div>
        </>
    )
}

export default Fruits