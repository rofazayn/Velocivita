import React, { useContext } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { DataContext } from '@/app/context/data-context'

const RenderedPDF = () => {
  const { resume } = useContext(DataContext)
  return (
    <Document
      pageMode='fullScreen'
      style={{
        backgroundColor: 'white',
        color: 'black',
      }}
    >
      <Page size='A4' style={{ backgroundColor: 'white' }}>
        <View>
          <Text>{resume.name}</Text>
        </View>
      </Page>
    </Document>
  )
}

export default RenderedPDF
