import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
// import { createLocalLink } from "../utils"
const MAIN_MENU_QUERY = graphql`
  query GET_MENU_ITEMS {
    allWpMenuItem(filter: { locations: { eq: HEADER_MENU } }) {
      nodes {
        id
        label
        url
        childItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  }
`

const renderMenuItem = item => {
  let hasChild = false
  if (item.childItems && item.childItems.nodes.length) {
    hasChild = true
  }
  return (
    <li key={item.id}>
      <Link to={item.url}>{item.label}</Link>
      {hasChild && renderChildMenu(item)}
    </li>
  )
}

const renderChildMenu = item => {
  return <ul>{item.childItems.nodes.map(child => renderMenuItem(child))}</ul>
}

const MainMenu = props => {
  return (
    <div>
      <StaticQuery
        query={MAIN_MENU_QUERY}
        render={({ allWpMenuItem: { nodes: menu } }) => {
          return (
            <ul className="nav">{menu.map(item => renderMenuItem(item))}</ul>
          )
        }}
      />
    </div>
  )
}

export default MainMenu
