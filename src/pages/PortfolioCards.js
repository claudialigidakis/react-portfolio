import React from 'react'
import ProjectCard from './ProjectCard.js'


const PortfolioCards = ({portfolioItems}) => {
  return portfolioItems.map(item => <ProjectCard {...item} key={item.id} />);
}

export default PortfolioCards
