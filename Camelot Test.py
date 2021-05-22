# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'
# %%
import numpy as np
import pandas as pd
import camelot


# %%
lincoln_ice_pdf_to_table = camelot.read_pdf("fsae_ln_c_2019_result.pdf",pages='1-end')


# %%
lincoln_ice = lincoln_ice_pdf_to_table[0].df


# %%
lincoln_ice = pd.DataFrame()
for table in lincoln_ice_pdf_to_table[0:3]:
    participants = table.df
    participants = participants.replace(r'\n','', regex=True)
    participants.columns = participants.iloc[0]
    participants = participants[1:]
    lincoln_ice.merge(participants, on="Car Number")


# %%
lincoln_ice


# %%
lincoln_ice = lincoln_ice.replace(r'\n','', regex=True)


# %%
lincoln_ice.columns = lincoln_ice.iloc[0]
lincoln_ice = lincoln_ice[1:]


# %%
lincoln_ice


