import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Guman Singh
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        I love thinkering with computers and programmes. In my vacant times I would either watch movies or else programme something. In my free time, you'll find me immersed in the world of dynamic web development, leveraging React and MySQL to bring ideas to life. I've also dabbled in the intricacies of machine-level communication with BATCH and SHELL scripts and ventured into the realm of functional programming using Java.
        </p>
        <p>
        Despite my admiration for the elegance of C, my heart lies in the realm of creativity and efficiency. Writing thousands of lines of code is a challenge that I appreciate but find more joy in exploring concise and impactful solutions. I was always captivated by human intelligence and dreamt of artificial intelliengent assistant doing my chores.This aspiration has led me to explore the vast landscape of artificial intelligence, experimenting with machine learning frameworks like TensorFlow and PyTorch.
        </p>
        <p>
        However, a pivotal turning point occurred when my curiosity collided with the realms of Cloud Computing. I delved into a comprehensive cloud computing course, mastering tools like Logstash, LAMP Stack, LEMP stack, Ansible, NGINX, Apache and Varnish along the way. This transformative journey propelled me into the heart of DigitalOcean, where I embraced a role that bridged customer success with cloud expertise. Now, I'm immersed in the intricacies of server management, addressing issues ranging from SSL configurations and DNS setups to optimizing website performance metrics.
        </p>
        <p>
        Join me on this dynamic adventure where my love for tinkering with computers converges with the boundless possibilities of cloud computing. Together, let's shape the future of technology, one cloud at a time!
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've enriched my expertise by collaborating with various industries, refining my skills, 
            and teaming up with talented professionals. Here's an overview of my journey:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
