import { getProjects } from '@/sanity/sanity-utils'
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className="text-7xl font-extrabold"><span className='bg-gradient-to-r from-red-400 via-yellow-500 to-blue-600 bg-clip-text text-transparent'>Virtual</span> Mansi</h1>
      <p className="mt-3 text-xl text-gray-300">Have a look at the stuff below. It's not as cool as it should be, but I'm (once again) learning a new system.</p>
      <h2 className='mt-24 font-bold text-gray-400 text-3xl'>Experiences</h2>
      <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>{projects.map((project) => (
          <Link 
          href={`/experiences/${project.slug}`} 
          key={project._id} 
          className='border-2 border-gray-500 rounded-lg p-1 hover:scale-110 hover:border-blue-500 transition' >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}
            <div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
              {project.name}
            </div>
          </Link>
        ))}
      </div>

    </div>
  )

}
