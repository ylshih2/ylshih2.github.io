/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
    firstName: 'Scott',
    lastName: 'Shih',
    jobTitle: 'Product Manager',
    city: 'Taipei',
    postalCode: '',
    country: 'Taiwan',
    phone: '+886-952768799',
    email: 'rockstone7000@gmail.com',
    hobbies: [
      'Triathlon',
      'Reading',
      'Coffee',
      'Diving'
    ],
    links: [
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/scott-shih-247b3392/'
      }
    ],
    skills: [
      'Amplitude',
      'AI Prompt Engineer',
      'Python',
      'SQL',
      'RPA'
    ],
    languages: ['Mandarin: Native','Cantonese: Fluent','Hokkien: Native','English: Fluent', 'Spanish - Conversational'],
    about: 'AI product manager with experience on B2B softwares and B2C platforms on web and mobile devices. Also an enthusiast and a practitioner on new technologies. Occasionally a prompt engineer or a barista in the office.',
    employmentHistory: [
      {
        jobTitle: 'Product Manager',
        startDate: 'Jan 2022',
        endDate: 'Present',
        employer: 'Taiwan AILabs',
        city: 'Taipei',
        projects:[
          {name:'Miin',url:'https://miin.cc',achievements: [
          'Led the planning, development, and operation of the audio social media with multiple platform on iOS, android and web.','Integrate AI technologies such as TTS, ASR and AI music onto the mobile platform and make it accessible for the general users.','Defined product roadmap and go-to-market strategy. Track product performance and　iterate rapidly.','Achieved a 300% grown on active users and session time.']
          },
          {name: 'Taiwan Social Distance',url:'https://www.cdc.gov.tw/Category/Page/R8bAd_yiVi22CIr73qM2yw',achievements: ['Led the planning, development, and operation of the transformation of the TSD app with new features of latest news','Integrated AI algorithms to provide AI factcheck information and related news to the general public.']}
        ],
        achievements: [
        ]
      },
      {
        jobTitle: 'Product Supervisor',
        startDate: 'May 2019',
        endDate: 'Dec 2021',
        employer: 'TPIsoftware',
        city: 'Taipei',
        achievements: [
          'RPA(Robotic Process Automation) product planning and AI product integration',
          'Conduct solutions integration and new product research and transform business needs into product requirements.',
  'Successfully implemented RPA solution into top enterprises in Taiwan, including Bank of Taiwan, Sinyi Realty and MSIG-Mingtai Insurance, with 80+ automation processes.',
        ]
      },
      {
        jobTitle: 'Project Manager',
        startDate: 'Apr 2018',
        endDate: 'Apr 2019',
        employer: 'Taipei Medical University',
        city: 'Taipei',
        achievements: [
          'Project management and resource scheduling for center’s ongoing medical-AI projects, including AESOP (prescription error detection system) and Empathy AI (emotion detection system).','Collaborated closely with academic and industrial partners to conduct affective computing projects, including facial expression and speech emotion recognition.'
        ]
      }
    ],
     educationHistory: [
      {
        school: 'City University of Hong Kong / Hong Kong',
        startDate: 'Aug 2013 ',
        endDate: 'July 2017',
        department: 'BBA (Hon) in Finance',
        achievements: [
          'Graduated with First Class Honors, GPA: 3.52 (top 5%)','Top Scholarship for the top 10% of international students'
        ]
      },
      {
        school: 'Tecnológico de Monterrey (ITESM) / Monterrey, Mexico',
        startDate: 'Aug 2015 ',
        endDate: 'Dec 2015',
        department: 'Student Exchange Program'}
    ],
    photo: 'https://media.licdn.com/dms/image/D5603AQEJkAZ_CHLHWw/profile-displayphoto-shrink_800_800/0/1673691068139?e=1680134400&v=beta&t=r20rXc4P16ueZO3TufDOEmHuSaKg9vGCR1hPWviAEFI',
  }
  
  const formatResume = (r) => ({
    ...r,
    address: [
      r.country,
      r.city,
      r.postalCode
    ].filter(Boolean).join(', ')
  })
  
  new Vue({
    el: "#app",
    data: formatResume(resume)
  });
  
  /**
   * Wait for animatable-component to be loaded (Only for VanillaJS)
   **/
  function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
  }
  if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
  } else animatableLoaded()