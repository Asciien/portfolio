// server/api/form.post.js
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Validation basique
  if (!body.nom || !body.prenom || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      message: 'Les champs nom, prénom, email et message sont requis'
    })
  }
  
  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      message: 'Email invalide'
    })
  }
  
  try {
    // Initialiser Supabase
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_KEY

    if (!supabaseUrl || !supabaseKey) {
      throw createError({
        statusCode: 500,
        message: 'Les variables d\'environnement SUPABASE_URL et SUPABASE_KEY sont requises'
      })
    }

    const supabase = createClient(
      supabaseUrl,
      supabaseKey
    )
    
    // Insérer les données
    const { data, error } = await supabase
      .from('form_responses')
      .insert([
        {
          nom: body.nom,
          prenom: body.prenom,
          entreprise: body.entreprise || null,
          email: body.email,
          telephone: body.telephone || null,
          message: body.message
        }
      ])
      .select()
    
    if (error) {
      console.error('Erreur Supabase:', error)
      throw error
    }
    
    return {
      success: true,
      message: 'Message envoyé avec succès !',
      data
    }
    
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement :', error)
    throw createError({
      statusCode: 500,
      message: 'Erreur lors de l\'envoi du message'
    })
  }
})