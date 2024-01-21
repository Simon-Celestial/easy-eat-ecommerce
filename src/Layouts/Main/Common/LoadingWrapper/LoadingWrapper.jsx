import React from 'react'
import {ThreeCircles} from "react-loader-spinner";

export const LoadingWrapper = ({
                                   children,
                                   loading = false,
                               }) => {

    if (!loading) return children;
    return (
        <>
            {
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.62)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    render(<ThreeCircles
                    visible={true}
                    height="50"
                    width="50"
                    color="white"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />)
                </div>
            }

                {children}
        </>
    )
}