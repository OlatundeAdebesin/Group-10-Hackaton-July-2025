import React from "react";

const team = [
  {
    name: "OLATUNDE ADEBESIN",
    role: "Full-Stack Developer/Team Lead",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQF2kLwq65Lvlw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714116888916?e=1764806400&v=beta&t=9JwsEo3IjhfGLQtecQ6ZBzqNjmrLnEJkrcYrkA5VWZo",
  },
  {
    name: "ADEMOLA TOHEEB",
    role: "Full-Stack Developer",
    img: "https://avatars.githubusercontent.com/u/225102349?v=4",
  },
  {
    name: "OLADIGBO SAMUEL",
    role: "Full-Stack Developer",
    img: "https://scontent.fiba2-3.fna.fbcdn.net/v/t39.30808-6/491939650_122233806140195887_2013910322168067872_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE-Rax_eq90KLuh-cPuT-v_XpJDCZdRVI5ekkMJl1FUjs0cr41pD_Do2fFy3J1FFygmKsW_NEFBcL5OqYY9ag1s&_nc_ohc=tlHBtiG1xqEQ7kNvwFuZoIu&_nc_oc=AdlAwz-v9JnzD3AGsrS6OrAcAdnJhpU-n-wDi_Z3Zgc1YlDwgcI6l0dm6_dPqSzs9zU&_nc_zt=23&_nc_ht=scontent.fiba2-3.fna&_nc_gid=wxsHdXWmbvIQzchs7aGjRw&oh=00_Afi0FUZEFPna7QogUyXygwIC2zXpuKPLrX1KZ_iQSvibpQ&oe=6922B3CD",
  },
  {
    name: "Samantha Lee",
    role: "Full-Stack Developer",
    img: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    name: "William Thompson",
    role: "Full-Stack Developer",
    img: "https://randomuser.me/api/portraits/men/79.jpg",
  },
  {
    name: "Ashley Williams",
    role: "Full-Stack Developer",
    img: "https://randomuser.me/api/portraits/women/72.jpg",
  },
];

const Team = () => (
  <section className="bg-gray-50 py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-12">Our Team</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
        {team.map((member, i) => (
          <div key={i}>
            {/* Full-width portrait image card */}
            <div className="w-full h-96 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Separate name and role */}
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-indigo-600 font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
