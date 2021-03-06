import React        from 'react';
import PropTypes    from 'prop-types';
import classNames   from 'classNames';

const Col = props => (
    <div  className={classNames(
        props.xs && `xs-${props.xs}`,
        props.sm && `sm-${props.sm}`,
        props.md && `md-${props.md}`,
        props.lg && `lg-${props.lg}`,

        props.xs_pull && `xs-pull-${props.xs_pull}`,
        props.sm_pull && `sm-pull-${props.sm_pull}`,
        props.md_pull && `md-pull-${props.md_pull}`,
        props.lg_pull && `lg-pull-${props.lg_pull}`,

        props.xs_push && `xs-push-${props.xs_push}`,
        props.sm_push && `sm-push-${props.sm_push}`,
        props.md_push && `md-push-${props.md_push}`,
        props.lg_push && `lg-push-${props.lg_push}`,
        
        props.className
    )}>
        {props.children}
    </div>
);

const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Col.propTypes = {
    children : PropTypes.any.isRequired,
    className: PropTypes.string,
    xs       : PropTypes.oneOf(sizes),
    sm       : PropTypes.oneOf(sizes),
    md       : PropTypes.oneOf(sizes),
    lg       : PropTypes.oneOf(sizes),

    xs_pull  : PropTypes.oneOf(sizes),
    sm_pull  : PropTypes.oneOf(sizes),
    md_pull  : PropTypes.oneOf(sizes),
    lg_pull  : PropTypes.oneOf(sizes),

    xs_push  : PropTypes.oneOf(sizes),
    sm_push  : PropTypes.oneOf(sizes),
    md_push  : PropTypes.oneOf(sizes),
    lg_push  : PropTypes.oneOf(sizes)
};
Col.defaultProps = {
    xs: 12
};

module.exports = Col;
