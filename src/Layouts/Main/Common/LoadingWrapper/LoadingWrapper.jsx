import React from 'react'
import {CircleDashed} from "@phosphor-icons/react";

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
                    <LoaderIcon style={{
                        height: 32,
                        width: 32,
                    }}/>
                </div>
            }

                {children}
        </>
    )
}