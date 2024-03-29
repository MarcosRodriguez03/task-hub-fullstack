'use client';

import React, { useEffect } from 'react'
import Image from 'next/image';
import messageIcon from '@/assets/messagesIcon.png';
import noNotifications from '@/assets/notFullNotifsIcon.png';
import plusIcon from '@/assets/plusIcon.png';
import ProjectCardComponent from '@/app/components/ProjectCardComponent';

const HomePage = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#FDFDFD';
    }, [])

    return (
        <div>

        </div>
    )
}

export default HomePage
