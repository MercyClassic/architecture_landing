"""init

Revision ID: fb881fe4d8e4
Revises:
Create Date: 2023-10-27 20:33:01.716211

"""
from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = 'fb881fe4d8e4'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        'example_of_work',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('main_photo', sa.String(length=200), nullable=False),
        sa.Column('description', sa.String(length=2000), nullable=False),
        sa.PrimaryKeyConstraint('id'),
    )
    op.create_table(
        'example_photo',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('path', sa.String(length=200), nullable=False),
        sa.Column('example_id', sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(['example_id'], ['example_of_work.id']),
        sa.PrimaryKeyConstraint('id'),
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('example_photo')
    op.drop_table('example_of_work')
    # ### end Alembic commands ###
