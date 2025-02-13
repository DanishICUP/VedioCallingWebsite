import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

const Metting = () => {

    const { roomid } = useParams()

    const MettingRef = useRef(null)


    useEffect(() => {

        let zp;
        const initMetting = () => {
            const userId = `userID-${Math.round(Math.random() * 1000000)}`
            const username = `username-${Math.round(Math.random() * 1000000)}`

            const appID = 2125743011;
            const serverSecret = import.meta.env.VITE_ZEGOCLOUDE_SECRET;
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid, userId, username);


            // Create instance object from Kit Token.
            zp = ZegoUIKitPrebuilt.create(kitToken);
            // start the call
            zp.joinRoom({
                container: MettingRef.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
                sharedLinks: [
                    {
                        name: 'share metting link',
                        url: window.location.href
                    }
                ],
            });
        }

        initMetting()

        return () => {
            if (zp) {
                zp.destroy()
            }
        }


    }, [roomid])


    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div ref={MettingRef}></div>
        </div>
    )
}

export default Metting