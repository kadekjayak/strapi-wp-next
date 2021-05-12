const components = {
    'element.hero': require('./element/hero').default,
    'element.slider': require('./element/slider').default
}


export function renderStrapiComponent(data){
    const StrapiComponent = components[ data.__component ];

    if( ! StrapiComponent ) {
        return null;
    }

    return <StrapiComponent {...data} />
}


export default components;
