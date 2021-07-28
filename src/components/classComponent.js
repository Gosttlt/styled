import React, { Fragment } from 'react'
import $ from 'jquery'
import styled from 'styled-components'

const DownloadButton = (props) => {
    return <StyledButton {...props} />
}

const OnlyDesktop = ({ children }) => {
    return <div>{children}</div>
}

const Preloader = () => {
    return <div>Loading...</div>
}

const sidebar = [
    {
        files: [
            {
                folder: 'Плитка',
                indexFile: 'Porcelanosa'
            }
        ],
        folder: 'Плитка'
    },
    {
        files: ['Porcelanosa'],//file
        folder: 'Keрамогранит'
    },
    {
        files: {
            files: [
                {
                    folder: 'Плитка',
                    indexFile: 'Porcelanosa'
                }
            ]
        },
        folder: 'Keрамогранит'
    },

]


class MyClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names: [],
            loading: false,
            sidebar: [
                {
                    files: [
                        {
                            folder: 'Плитка',
                            indexFile: 'Porcelanosa'
                        }
                    ],
                    folder: 'Плитка'
                },
                {
                    files: ['Porcelanosa'],
                    folder: 'Keрамогранит'
                },
                {
                    files: {
                        files: [
                            {
                                folder: 'Плитка',
                                indexFile: 'Porcelanosa'
                            }
                        ]
                    },
                    folder: 'Keрамогранит'
                },

            ]
        }
        this.collapse = this.collapse.bind(this)
    }

    componentDidMount() {
        this.collapse()
    }

    componentDidUpdate(prevProps) {
        let con1 = prevProps.currentFile !== this.props.currentFile
        let con2 = prevProps.currentSection !== this.props.currentSection
        if (con1 || con2) {
            this.collapse()
        }
    }

    // getNamesArr() {
    //     let arr = {},
    //     this.state.sidebar.forEach(section => {
    //         section.forEach(file => {

    //         })
    //     })
    // }
    collapse() {
        setTimeout(function () {
            $('[data-open=true]').slideDown()
            $('[data-open=false]').slideUp()
        })
    }



    render() {
        if (this.state.loading) {
            return (
                <Menu id="sidebar-menu">
                    <StyledFlex>
                        <Preloader size={24} />
                    </StyledFlex>
                </Menu>
            )
        }
        return (
            <Menu id="sidebar-menu">

                <Sections>
                    <SectionLinks>
                        <div>
                            <SectionLink level={1}
                            // href={getLinkHref(index)}
                            // onClick={e => onSectionSelect(e, index)}
                            // className={isSectionActive && 'docSearch-lvl0'}
                            // isActive={isSectionActive}
                            >
                                123 321
                            </SectionLink>
                        </div>
                    </SectionLinks>
                </Sections>
                <Collapse data-open={true}>
                    <Fragment>
                        <Collapse>
                            render subrgoup (в рамках тестового задания рендеринг подгруппы реализовывать не нужно)
                        </Collapse>
                    </Fragment>
                </Collapse>
                <OnlyDesktop>
                    <SideFooter>
                        <DownloadButton>
                            opne top
                        </DownloadButton>
                    </SideFooter>
                </OnlyDesktop>
            </Menu>
        )
    }
}

const StyledButton = styled.button`
color: #000;
`

const SideFooter = styled.div`
                margin-top: 30px;
                padding-bottom: 30px;
                border: 1px solid blue;
                `
const Menu = styled.div`
                position: sticky;
                top: 60px;
                width: 100%;
                height: calc(100vh - 138px);
                overflow-y: auto;
                `
const StyledFlex = styled.div`
                display: flex;
                alignItems: center;
                justifyContent: flex-start;
                flexDirection: column;
                margin: 44px 34px 0 0;
                `
const Sections = styled.div`
                margin-bottom: 25px;
                margin-top: 10px;
                width: fit-content;
                min-width: 280px;
                border: 1px solid red;
`
const SectionLinks = styled.div`
                @media (max-width: 768px) {
                    position: relative;
}`

const SectionLink = styled.a`
display: block;
position: relative;
font-size: 18px;
font-weight: 500;
color: #b0b8c5;
}
${props =>
        props.level === 1 &&
        `
margin-left: 5px;
`} ${props =>
        props.level === 2 &&
        `
margin-left: 30px;
`};
${props =>
        props.level === 3 &&
        `
margin-left: 45px;
`};
${props =>
        props.isActive &&
        `
color: #40364d;
`};
`
const Collapse = styled.div`
display: none;
`

export default MyClass