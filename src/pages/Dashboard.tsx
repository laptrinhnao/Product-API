const Dashboard = () => {
  return (
    <>
      <div className="m-0 p-0 no-underline box-border">
        <div className="flex w-96">
          <nav className="sticky w-72">
            <div className="w-4/5">
              <div className="m-96 pb-12 flex items-center">
                <img src="/pic/m-96 pb-12 flex items-center.jpg" alt="" />
                <h1 className="m-96">jobs</h1>
              </div>
              <ul className="">
                <li className="pb-8">
                  <a href="#">
                    <i className="fas fa-user"></i>
                    <span className="">Dashboard</span>
                  </a>
                </li>
                <li className="pb-8">
                  <a href="#">
                    <i className="fas fa-chart-bar"></i>
                    <span className="">Analytics</span>
                  </a>
                </li>
                <li className="pb-8">
                  <a href="#">
                    <i className="fas fa-tasks"></i>
                    <span className="">Jobs Board</span>
                  </a>
                </li>
                <li className="pb-8">
                  <a href="#">
                    <i className="fab fa-dochub"></i>
                    <span className="">Documnents</span>
                  </a>
                </li>
                <li className="pb-8">
                  <a href="#">
                    <i className="fas fa-cog"></i>
                    <span className="">Setting</span>
                  </a>
                </li>
                <li className="pb-8">
                  <a href="#">
                    <i className="fas fa-question-circle"></i>
                    <span className="">Help</span>
                  </a>
                </li>
                <li className="pb-8">
                  <a href="#" className="m-96 pb-12 flex items-centerut">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <section className="w-full">
            <div className="w-full-top">
              <p>Explore the universe!</p>
            </div>
            <div className="w-full-body">
              <h1 className="m-96">Recent Jobs</h1>
              <div className="flex p-2.5 justify-between">
                <input type="search" placeholder="Search job here..." />
                <select name="" id="">
                  <option>Category</option>
                  <option>Web Design</option>
                  <option>App Design</option>
                  <option>App Development</option>
                </select>
                <select className="filter">
                  <option>Filter</option>
                </select>
              </div>

              <div className="flex p-2.5 mt-5 justify-between">
                <p>
                  There are more than <span>400</span> Jobs
                </p>
                <a href="#">See all</a>
              </div>
              <div className="w-full p-3.5 cursor-pointer flex rounded-lg mb-3.5 justify-between">
                <div className="flex">
                  <div className="img">
                    <i className="fab fa-google-drive"></i>
                  </div>
                  <div className="text">
                    <h2>UX Designer</h2>
                    <span>Google Drive - Junior Post</span>
                  </div>
                </div>
                <div className="text-right text-neutral-700">
                  <h4>$6.7 - $12.5k /yr</h4>
                  <span>1 days ago</span>
                </div>
              </div>
              <div className="w-full p-3.5 cursor-pointer flex rounded-lg mb-3.5 justify-between">
                <div className="flex">
                  <div className="img">
                    <i className="fab fa-google"></i>
                  </div>
                  <div className="text">
                    <h2>JavaScript Developer</h2>
                    <span>Google - Senior Post</span>
                  </div>
                </div>
                <div className="text-right text-neutral-700">
                  <h4>$8.7 - $13.2k /yr</h4>
                  <span>2 days ago</span>
                </div>
              </div>
              <div className="w-full p-3.5 cursor-pointer flex rounded-lg mb-3.5 justify-between">
                <div className="flex">
                  <div className="img">
                    <i className="fab fa-facebook"></i>
                  </div>
                  <div className="text">
                    <h2>Product Developer</h2>
                    <span>Facbook - Manager Post</span>
                  </div>
                </div>
                <div className="text-right text-neutral-700">
                  <h4>$11 - $18.5k /yr</h4>
                  <span>2 days ago</span>
                </div>
              </div>
              <div className="w-full p-3.5 cursor-pointer flex rounded-lg mb-3.5 justify-between">
                <div className="flex">
                  <div className="img">
                    <i className="fab fa-git-alt"></i>
                  </div>
                  <div className="text">
                    <h2>Programmer</h2>
                    <span>Github - Juni Post</span>
                  </div>
                </div>
                <div className="text-right text-neutral-700">
                  <h4>$6 - $11.5k /yr</h4>
                  <span>3 days ago</span>
                </div>
              </div>
              <div className="w-full p-3.5 cursor-pointer flex rounded-lg mb-3.5 justify-between">
                <div className="flex">
                  <div className="img">
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div className="text">
                    <h2>React.js Expert</h2>
                    <span>Youtube - VIP</span>
                  </div>
                </div>
                <div className="text-right text-neutral-700">
                  <h4>$12.5 - $25.5k /yr</h4>
                  <span>4 days ago</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
