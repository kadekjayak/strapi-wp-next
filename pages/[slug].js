import {Fragment} from 'react';
import {renderStrapiComponent} from '../components/strapi';

export default function DynamicPage( {pageData} ){

    if( ! pageData ) return null;
    
    return (
        <Fragment>
            <h1>{pageData.title}</h1>
            {pageData.locale}

            {pageData.content.map(( item ) => {
                console.log( item )
                return renderStrapiComponent( item )
            })}
        </Fragment>
    )
}

export async function getStaticPaths() {
    const pages = await (await fetch( process.env.STRAPI_URL + "/pages")).json();
    const paths = pages.map((page) => {
        return {
            params: { slug: page.slug },
        };
    });

    return { paths, fallback: true };
}


export async function getStaticProps({ params, preview = null }) {
    let data = await (await fetch( process.env.STRAPI_URL + '/pages/' + params.slug)).json();
    //console.log( data )
    return {
        props: {
            pageData: data,
            preview
        }
    }
  }
