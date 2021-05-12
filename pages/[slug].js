import {Fragment} from 'react';
import {renderStrapiComponent} from '../components';

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

    console.log( pages );
    const paths = pages.map((page) => {
        console.log( page.slug );
        return {
            params: { slug: page.slug },
        };
    });

    console.log( paths );
    return { paths, fallback: true };
}


export async function getStaticProps({ params, preview = null }) {
    //console.log( params.slug );
    let data = await (await fetch( process.env.STRAPI_URL + '/pages?=' + params.slug)).json();

    return {
        props: {
            pageData: data[0],
            preview
        }
    }
  }
