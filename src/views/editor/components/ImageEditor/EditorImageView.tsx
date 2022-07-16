import { Box } from '@chakra-ui/react'
import React from 'react'
import { IImageBlockData } from 'store/slices/types'
import { CarouselLayoutView } from './CarouselLayoutView'
import { GridLayoutView } from './GridLayoutView'
import { ImageLayoutEnum } from './ImageLayoutStyle'
import { SingleLayoutView } from './SingleLayoutView'

interface IEditorImageViewProps {
    data: IImageBlockData
}

export const EditorImageView = ({ data }:IEditorImageViewProps) => {
    const layouts: Record<ImageLayoutEnum, React.ReactNode> = {
        [ImageLayoutEnum.Single]: <SingleLayoutView data={data.value}/>,
        [ImageLayoutEnum.Grid]: <GridLayoutView data={data.value}/>,
        [ImageLayoutEnum.Carousel]: <CarouselLayoutView data={data.value}/>,

    }
  return (
    <Box>
        {layouts[data.value.layout]}
    </Box>
  )
}
