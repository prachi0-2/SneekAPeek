import React from 'react';
import "./About.css";
import aboutImg from "../../images/about.webp";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About SneakAPeek</h2>
            <p className='fs-17'>Welcome to SneakAPeek, your ultimate destination for discovering books that captivate your imagination. Whether you're searching for a classic novel, a hidden gem, or the latest bestseller, SneakAPeek makes it easy and enjoyable to find the perfect read. Our user-friendly interface and powerful search tools allow you to explore a vast library of books by title, author, genre, or keyword.</p>
            <p className='fs-17'>At SneakAPeek, we believe that every reader deserves the thrill of uncovering their next great book. That’s why we’ve created a platform that not only helps you find books but also offers personalized recommendations, reviews, and sneak peeks into what’s trending in the literary world.

Join our community of book lovers and embark on a literary adventure. Whether you're a seasoned reader or just starting your journey, SneakAPeek is here to guide you every step of the way.

Discover. Explore. Read. SneakAPeek.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
