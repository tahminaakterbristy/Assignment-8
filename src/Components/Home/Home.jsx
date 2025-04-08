import image1 from '../../assets/pngwing 1.png'
import Books from '../Books/Books';

const Home = () => {
    return (
        <>
        <div className='mx-7 flex flex-col md:flex-col md:space-x-4'>
       <div className='flex bg-slate-200 rounded-lg'>
        <div className=''>
            <h1 className='text-5xl font-semibold mt-20 ml-24'>Books to freshen up<br></br> your bookshelf</h1>
            <button className="btn bg-green-500 ml-24 text-white border-none mt-10 btn-lg">Book List</button>

        </div>
        <div>
<img src={image1} className='ml-60 py-8'></img>
        </div>
       </div>

        </div>
        <Books></Books>
        </>
    );
};

export default Home;