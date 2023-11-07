import service from '../../../assets/home/chef-service.jpg'

const Serv = () => {
    return (
        <div className='relative sm:hidden' >
            <img src={service} alt="" />
            <div className='w-1/2 bg-white md:my-24 sm:top-5 absolute p-16 rounded-lg md:left-80 sm:left-5 top-12'>
                <h1 className='text-5xl text-black uppercase text-center mb-3'>bistro boss</h1>
                <p className='text-xs text-black text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Serv;